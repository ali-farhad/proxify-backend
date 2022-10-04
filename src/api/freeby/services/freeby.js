'use strict';

/**
 * freeby service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::freeby.freeby');
