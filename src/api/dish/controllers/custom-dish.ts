import { Context } from "koa";

export default {
    async getDish(ctx: Context) : Promise<any>{
        try{
            const {id} = ctx.params;
            const dish = await strapi.db.query("api::dish.dish").findOne({
                where: {id},
                populate: '*'
            });
            return ctx.body = dish;
        } catch (error) {
            ctx.status = 500;
            return ctx.body = {error: error.message}
        }
    }, 

    async getAllDishes(ctx: Context) : Promise<any>{
        try {
            const { query } = ctx;
            const dishes = await strapi.entityService.findMany("api::dish.dish", {
              fields: ["id", "name", "price", "ingredients"],
              populate: {
                image: { fields: ["url", "width", "height", "alternativeText"] },
                dish_tags: {
                  fields: ["name"],
                  populate: {
                    icon: { fields: ["url", "width", "height", "alternativeText"] },
                  },
                },
                side_dishes: { fields: ["name"] },
                dish_changes: { fields: ["name"] },
              },
              ...query,
            });
            return (ctx.body = dishes);
          } catch (error) {
            ctx.status = 500;
            return (ctx.body = { error: error.message });
          }
    }
}