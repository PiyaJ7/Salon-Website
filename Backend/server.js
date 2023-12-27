const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const portfinder = require('portfinder');

// Create the Express app
const app = express();

// Use middlewares to handle data and requests
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Import the routes
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const packageRoutes = require('./routes/packageRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const empRoutes = require('./routes/employeeRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const financeRoutes = require('./routes/financeRoutes');
const inveMsgRoutes = require('./routes/inveMsgRoutes');
const orderRoutes = require('./routes/orderRoutes');
const salRoutes = require('./routes/salaryRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const supMsgRoutes = require('./routes/supMsgRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

// Routes
app.use('/api/users', userRoutes);
app.use('/api/Book', appointmentRoutes);
app.use('/api/packages', packageRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/attendances", attendanceRoutes);
app.use("/api/employees", empRoutes);
app.use("/api/Product", inventoryRoutes);
app.use("/api/Fin", financeRoutes);
app.use("/api/IMsg", inveMsgRoutes);
app.use("/api/Ord", orderRoutes)
app.use("/api/sal", salRoutes);
app.use("/api/schedu", scheduleRoutes);
app.use("/api/Msg", supMsgRoutes);
app.use("/api/Sup", supplierRoutes);


// Connect to the MongoDB database
mongoose.connect('mongodb+srv://as2020323:r682CQit3yH1WwGN@atlas-10g355-shard-0.rbnaycj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB database'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a route to check the server status
app.get('/', (req, res) => {
    res.send('Express server is running');
});

// Find an available port dynamically
// Install on backend npm install portfinder
portfinder.getPortPromise({ startPort: 3002 })
    .then((port) => {
        // Start the server on the dynamically found port
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch((err) => console.error('Error finding available port:', err));

serviceRoutes.json