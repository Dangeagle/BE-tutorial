const express = require("express");
const { create_user, create_carz } = require("../service/authen.service");
const carzLizt = require("../schema/ListCarz");
const ListCarz = require("../schema/ListCarz");

const getCarzController = async (req, res) => {
  const listCarz = await carzLizt.find({});
  // console.log(list);
  // res.json("hehe");
  return res.status(200).send({
    data: listCarz,
  });
};
const postCarzController = async (req, res) => {
  try {
    const carzLizt = await create_carz(req.body);
    res.send(carzLizt);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { getCarzController, postCarzController };
