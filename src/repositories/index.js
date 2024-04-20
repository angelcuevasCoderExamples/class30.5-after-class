const { CartsDao, ItemsDao, UsersDao } = require("../dao/factory");
const CartService = require("../services/carts.service");
const ItemsService = require("../services/items.service");
const UsersService = require("../services/user.service");

const itemsService = new ItemsService(new ItemsDao());
const cartsService = new CartService(new CartsDao(), itemsService);
const usersService = new UsersService(new UsersDao());

module.exports = {
    itemsService,
    cartsService,
    usersService
}