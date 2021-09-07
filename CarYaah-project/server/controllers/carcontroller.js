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

exports.isFavourite = async function (req, res) {
    try {
        const isFav = (await db.Favourite.findAll({ where: { clientId: req.client.id, carId: req.params.carId } })).length > 0
        return res.status(200).send(isFav)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

