'use strict';

/**
 * purchase controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::purchase.purchase', ({strapi}) => ({

    async me (ctx) {
        const user = ctx.state.user

        if(!user) {
            return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }])
        }
        //fetch all proxy data
        const data = await strapi.entityService.findMany("api::purchase.purchase", {
            populate: ['proof'],
            filters: {
                user: {
                    id: user.id
                }
            }
        })
        if(!data) {
            return ctx.notFound()
        }

        return data

    }


}));
