// IMPORTANDO LO QUE NECESITO PARA LA CONEXION/API: express, cors, bodyparser, mysql //

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// JSONWEBTOKEN DEPENDENCIAS //

const jwt = require("jsonwebtoken");
const config = require("./config");

// DECLARO LA APP //

const app = express();

// APP USES //

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("llave", config.llave);

// DATOS DE CONEXION //

const connection = mysql.createConnection({
  host: "localhost",
  user: "bmontans",
  password: "password",
  database: "hackamarket",
});

// CONEXION //

connection.connect((error) => {
  if (error) throw error; //SI HAY ERROR //
  console.log("DATABASE UP"); // SI NO HAY ERROR //
});

// PUERTO DE LA API //
const PORT = 3050;

app.listen(PORT, () => console.log("VIVA EL JAVASCRIPT"));

// LLAMADA DE PRUEBA //

app.get("/clientes", (req, res) => {
  const sql = "SELECT * FROM clientes";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay clientes");
    }
  });
});

app.get("/productos", (req, res) => {
  const sql = "SELECT * FROM productos";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay productos");
    }
  });
});

// FUNCION PARA CREAR CLIENTES //

app.post("/add", (req, res) => {
  const sql = "INSERT INTO clientes SET ?";
  const newClient = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    ciudad: req.body.ciudad,
    empresa: req.body.empresa,
  };

  connection.query(sql, newClient, (error) => {
    if (error) throw error;
    res.send("Cliente creado");
  });
});

// FUNCION PARA CREAR USERS //

app.post("/addUser", (req, res) => {
  const sql = "INSERT INTO usuarios SET ?";
  const newClient = {
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin,
  };

  connection.query(sql, newClient, (error) => {
    if (error) throw error;
    res.send("Usuario creado");
  });
});

// FUNCION PARA EDITAR CLIENTES //

app.put("/clientes/edit/:id", (req, res) => {
  const { id } = req.body;
  const { nombre } = req.body;
  const { apellido } = req.body;
  const { ciudad } = req.body;
  const { empresa } = req.body;

  const sql = `UPDATE clientes SET nombre='${nombre}',
      apellido='${apellido}',
      ciudad='${ciudad}',
      empresa='${empresa}'
      WHERE id='${id}'`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Usuario creado");
  });
});

// FUNCION PARA BORRAR CLIENTES //
app.delete("/clientes/del/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM clientes WHERE id=${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Cliente borrado.");
  });
});

// METODO LOGIN QUE CREA EL TOKEN //
app.post("/auth", (req, res) => {
  // DATOS QUE LLEGAN, USER Y PASSWORD //
  const email = req.body.email;
  const password = req.body.password;

  // SECUENCIA SQL //

  const sql = `SELECT * FROM usuarios WHERE email='${email}' AND password='${password}'`;

  // CONEXION A LA BBDD //
  connection.query(sql, (error, results) => {
    let admin = null;
    if (error) throw error;
    if (results.length > 0) {
      const payload = {
        check: true,
      };
      if (results[0].admin === 1) {
        admin = true;
      } else {
        admin = false;
      }
      const token = jwt.sign(payload, app.get("llave"), {
        expiresIn: "5 days",
      });
      res.json({
        mensaje: "Autenticación correct",
        token: token,
        admin: admin,
      });
    } else {
      console.log("Datos incorrectos");
    }
  });

  /*
  if (email === "admin" && password === "admin") {
    const payload = { check: true };
    const token = jwt.sign(payload, app.get("llave"), {
      expiresIn: "5 days",
    });
    res.json({
      mensaje: "Te has autenticado correctamente",
      token: token,
    });
    console.log(token);
  } else {
    console.log("Datos incorrectos");
  }*/
});
