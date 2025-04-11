"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const router = new koa_router_1.default({ prefix: '/api/v1/categories' });
exports.router = router;
const categories = [
    { name: 'Food', description: 'some text here' },
    { name: 'Travel', description: 'another text' }
];
const getAll = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = categories;
    yield next();
});
const getById = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = +ctx.params.id;
    if ((id <= categories.length) && id > 0) {
        ctx.body = categories[id - 1];
    }
    else {
        ctx.status = 404;
    }
    yield next();
});
const createCategory = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    let cat = ctx.request.body;
    let newCat = { name: cat.name, description: cat.description };
    categories.push(newCat);
    ctx.status = 201;
    ctx.body = newCat;
    yield next();
});
const updateCategory = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = +ctx.params.id;
    if ((id <= categories.length) && id > 0) {
        let cat = ctx.request.body;
        categories[id - 1].name = cat.name;
        categories[id - 1].description = cat.description;
        ctx.body = categories[id - 1];
    }
    else {
        ctx.status = 404;
    }
    yield next();
});
const deleteCategory = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = +ctx.params.id;
    if ((id <= categories.length) && id > 0) {
        categories.splice(id - 1, 1);
        ctx.body = {
            message: "Removed Category " + id
        };
    }
    else {
        ctx.status = 404;
    }
    yield next();
});
router.get('/', getAll);
router.get('/:id([0-9]{1,})', getById);
router.post('/', (0, koa_bodyparser_1.default)(), createCategory);
router.put('/:id([0-9]{1,})', (0, koa_bodyparser_1.default)(), updateCategory);
router.delete('/:id([0-9]{1,})', deleteCategory);
