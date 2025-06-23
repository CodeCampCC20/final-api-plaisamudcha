import express from "express";
import morgan from "morgan";
import cors from "cors";
import errorMiddleware from "./utils/errorMiddleware.js";
import pageNotFound from "./utils/notFound.js";
import authRoute from "./routes/auth.route.js";
import usersRoute from "./routes/users.route.js";
import doctorsRoute from "./routes/doctors.route.js";
import healthRoute from "./routes/health.route.js";
import noteRoute from "./routes/note.route.js";

const PORT = 3026;
const pai = express();
pai.use(express.json());
pai.use(morgan("dev"));
pai.use(
  cors({
    origin: "http://localhost:5173",
  })
);

pai.use("/auth", authRoute);
pai.use("/users", usersRoute);
pai.use("/doctors", doctorsRoute);
pai.use("/health-records", healthRoute);
pai.use("/doctor-notes", noteRoute);

pai.use(pageNotFound);
pai.use(errorMiddleware);

pai.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
