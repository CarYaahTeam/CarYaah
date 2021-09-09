const { Op } = require("sequelize");
var db = require("../db/index");

exports.retrievAllCars = async (req, res) => {
    try {
        const cars = await db.Car.findAll();
        return res.status(201).json(cars);
    } catch (error) {
        console.log(error)
    }
}

exports.updateFavourite = async function (req, res) {
    try {
        const isFav = (await db.Favourite.findAll({ where: { clientId: req.client.id, carId: req.params.carId } })).length > 0
        console.log(isFav)
        if (isFav) {
            await db.Favourite.destroy({ where: { clientId: req.client.id, carId: req.params.carId } })
            return res.status(201).send(false)
        } else {
            await db.Favourite.create({ carId: req.params.carId, clientId: req.client.id });
            return res.status(201).send(true)
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

//-------------------Search available car by date---------------//
exports.searchByTimeFrame = async function (req, res) {
    try {
        const { start_date_av, end_date_av } = req.query
        console.log({ start_date_av, end_date_av })
        const result = await db.Car.findAll({
            where: {
                start_date_av: {
                    [Op.lte]: new Date(start_date_av)
                },
                end_date_av: {
                    [Op.gte]: new Date(end_date_av)
                }
            }
        })
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
exports.isFavourite = async function (req, res) {
    try {
        const isFav = (await db.Favourite.findAll({ where: { clientId: req.client.id, carId: req.params.carId } })).length > 0
        return res.status(200).send(isFav)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

