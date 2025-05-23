const Appointment = require("../models/appointmentModel");

const getPastAppointments = async (req, res) => {
  const userId = req.body.userId;
  const today = new Date();

  try {
    const pastAppointments = await Appointment.find({
      userId,
      appointmentDate: { $lt: today }, // Fetch appointments before today
    }).sort({ appointmentDate: -1 }); // Sort in descending order (latest first)

    return res.json({ pastAppointments });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
const getDocPastAppointments = async (req, res) => {
  const doctorId = req.body.userId;
  const today = new Date();

  try {
    const pastAppointments = await Appointment.find({
      doctorId,
      appointmentDate: { $lt: today }, // Fetch appointments before today
    }).sort({ appointmentDate: -1 }); // Sort in descending order (latest first)

    return res.json({ pastAppointments });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
const getUpcommingAppointments = async (req, res) => {
  const userId = req.body.userId;
  const today = new Date();

  try {
    const UpcommingAppointments = await Appointment.find({
      userId,
      appointmentDate: { $gte: today }, // Fetch appointments before today
    }).sort({ appointmentDate: 1 }); // Sort in descending order (latest first)

    return res.json({ UpcommingAppointments });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
const getDocUpcommingAppointments = async (req, res) => {
  const doctorId = req.body.userId;
  const today = new Date();

  try {
    const UpcommingAppointments = await Appointment.find({
      doctorId,
      appointmentDate: { $gte: today }, // Fetch appointments before today
    }).sort({ appointmentDate: 1 }); // Sort in descending order (latest first)

    return res.status(200).json({ UpcommingAppointments });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getPastAppointments,
  getUpcommingAppointments,
  getDocUpcommingAppointments,
  getDocPastAppointments,
};
