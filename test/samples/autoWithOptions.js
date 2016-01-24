/**
 * @apiDefine childParam
 * @apiParam {bigint} id
 * @apiParam {string} name
 * @apiParam {date} createdAt
 * @apiParam {date} updatedAt
 * @apiParam {bigint} [parentId]
 * @apiParam {grandchild[]} grandchildren
 */

/**
 * @apiDefine childRequest
 * @apiParamExample {json} Request
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1,
 *       "grandchildren": [
 *         {
 *           "id": 1,
 *           "name": "string",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1,
 *           "grandParentId": 1,
 *           "childId": 1,
 *           "parent": {
 *             "id": 1,
 *             "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *             "name": "string",
 *             "count": 1,
 *             "category": "CAT1 | CAT2",
 *             "birthday": "2015-12-31T23:59:59.123",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentDetailsId": 1,
 *             "children": [
 *               {}
 *             ],
 *             "parentDetail": {
 *               "id": 1,
 *               "address": "string",
 *               "createdAt": "2015-12-31T23:59:59.123",
 *               "updatedAt": "2015-12-31T23:59:59.123",
 *               "parentId": 1
 *             }
 *           }
 *         }
 *       ]
 *     }
 */

/**
 * @apiDefine childArrayRequest
 * @apiParamExample {json} Request
 *     [
 *       {
 *         "id": 1,
 *         "name": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1,
 *         "grandchildren": [
 *           {
 *             "id": 1,
 *             "name": "string",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1,
 *             "grandParentId": 1,
 *             "childId": 1,
 *             "parent": {
 *               "id": 1,
 *               "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *               "name": "string",
 *               "count": 1,
 *               "category": "CAT1 | CAT2",
 *               "birthday": "2015-12-31T23:59:59.123",
 *               "createdAt": "2015-12-31T23:59:59.123",
 *               "updatedAt": "2015-12-31T23:59:59.123",
 *               "parentDetailsId": 1,
 *               "children": [
 *                 {}
 *               ],
 *               "parentDetail": {
 *                 "id": 1,
 *                 "address": "string",
 *                 "createdAt": "2015-12-31T23:59:59.123",
 *                 "updatedAt": "2015-12-31T23:59:59.123",
 *                 "parentId": 1
 *               }
 *             }
 *           }
 *         ]
 *       }
 *     ]
 */

/**
 * @apiDefine childResponse
 * @apiSuccessExample {json} Response
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1,
 *       "grandchildren": [
 *         {
 *           "id": 1,
 *           "name": "string",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1,
 *           "grandParentId": 1,
 *           "childId": 1,
 *           "parent": {
 *             "id": 1,
 *             "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *             "name": "string",
 *             "count": 1,
 *             "category": "CAT1 | CAT2",
 *             "birthday": "2015-12-31T23:59:59.123",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentDetailsId": 1,
 *             "children": [
 *               {}
 *             ],
 *             "parentDetail": {
 *               "id": 1,
 *               "address": "string",
 *               "createdAt": "2015-12-31T23:59:59.123",
 *               "updatedAt": "2015-12-31T23:59:59.123",
 *               "parentId": 1
 *             }
 *           }
 *         }
 *       ]
 *     }
 */

/**
 * @apiDefine childArrayResponse
 * @apiSuccessExample {json} Response
 *     [
 *       {
 *         "id": 1,
 *         "name": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1,
 *         "grandchildren": [
 *           {
 *             "id": 1,
 *             "name": "string",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1,
 *             "grandParentId": 1,
 *             "childId": 1,
 *             "parent": {
 *               "id": 1,
 *               "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *               "name": "string",
 *               "count": 1,
 *               "category": "CAT1 | CAT2",
 *               "birthday": "2015-12-31T23:59:59.123",
 *               "createdAt": "2015-12-31T23:59:59.123",
 *               "updatedAt": "2015-12-31T23:59:59.123",
 *               "parentDetailsId": 1,
 *               "children": [
 *                 {}
 *               ],
 *               "parentDetail": {
 *                 "id": 1,
 *                 "address": "string",
 *                 "createdAt": "2015-12-31T23:59:59.123",
 *                 "updatedAt": "2015-12-31T23:59:59.123",
 *                 "parentId": 1
 *               }
 *             }
 *           }
 *         ]
 *       }
 *     ]
 */

/**
 * @apiDefine grandchildParam
 * @apiParam {bigint} id
 * @apiParam {string} name
 * @apiParam {date} createdAt
 * @apiParam {date} updatedAt
 * @apiParam {bigint} [parentId]
 * @apiParam {bigint} [grandParentId]
 * @apiParam {bigint} [childId]
 * @apiParam {parent} parent
 */

/**
 * @apiDefine grandchildRequest
 * @apiParamExample {json} Request
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1,
 *       "grandParentId": 1,
 *       "childId": 1,
 *       "parent": {
 *         "id": 1,
 *         "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *         "name": "string",
 *         "count": 1,
 *         "category": "CAT1 | CAT2",
 *         "birthday": "2015-12-31T23:59:59.123",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentDetailsId": 1,
 *         "children": [
 *           {
 *             "id": 1,
 *             "name": "string",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1,
 *             "grandchildren": [
 *               {}
 *             ]
 *           }
 *         ],
 *         "parentDetail": {
 *           "id": 1,
 *           "address": "string",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1
 *         }
 *       }
 *     }
 */

/**
 * @apiDefine grandchildArrayRequest
 * @apiParamExample {json} Request
 *     [
 *       {
 *         "id": 1,
 *         "name": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1,
 *         "grandParentId": 1,
 *         "childId": 1,
 *         "parent": {
 *           "id": 1,
 *           "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *           "name": "string",
 *           "count": 1,
 *           "category": "CAT1 | CAT2",
 *           "birthday": "2015-12-31T23:59:59.123",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentDetailsId": 1,
 *           "children": [
 *             {
 *               "id": 1,
 *               "name": "string",
 *               "createdAt": "2015-12-31T23:59:59.123",
 *               "updatedAt": "2015-12-31T23:59:59.123",
 *               "parentId": 1,
 *               "grandchildren": [
 *                 {}
 *               ]
 *             }
 *           ],
 *           "parentDetail": {
 *             "id": 1,
 *             "address": "string",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1
 *           }
 *         }
 *       }
 *     ]
 */

/**
 * @apiDefine grandchildResponse
 * @apiSuccessExample {json} Response
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1,
 *       "grandParentId": 1,
 *       "childId": 1,
 *       "parent": {
 *         "id": 1,
 *         "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *         "name": "string",
 *         "count": 1,
 *         "category": "CAT1 | CAT2",
 *         "birthday": "2015-12-31T23:59:59.123",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentDetailsId": 1,
 *         "children": [
 *           {
 *             "id": 1,
 *             "name": "string",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1,
 *             "grandchildren": [
 *               {}
 *             ]
 *           }
 *         ],
 *         "parentDetail": {
 *           "id": 1,
 *           "address": "string",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1
 *         }
 *       }
 *     }
 */

/**
 * @apiDefine grandchildArrayResponse
 * @apiSuccessExample {json} Response
 *     [
 *       {
 *         "id": 1,
 *         "name": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1,
 *         "grandParentId": 1,
 *         "childId": 1,
 *         "parent": {
 *           "id": 1,
 *           "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *           "name": "string",
 *           "count": 1,
 *           "category": "CAT1 | CAT2",
 *           "birthday": "2015-12-31T23:59:59.123",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentDetailsId": 1,
 *           "children": [
 *             {
 *               "id": 1,
 *               "name": "string",
 *               "createdAt": "2015-12-31T23:59:59.123",
 *               "updatedAt": "2015-12-31T23:59:59.123",
 *               "parentId": 1,
 *               "grandchildren": [
 *                 {}
 *               ]
 *             }
 *           ],
 *           "parentDetail": {
 *             "id": 1,
 *             "address": "string",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1
 *           }
 *         }
 *       }
 *     ]
 */

/**
 * @apiDefine parentParam
 * @apiParam {bigint} id
 * @apiParam {uuid} uuid
 * @apiParam {string} name
 * @apiParam {integer} [count]
 * @apiParam {enum} category
 * @apiParam {date} birthday
 * @apiParam {date} createdAt
 * @apiParam {date} updatedAt
 * @apiParam {bigint} [parentDetailsId]
 * @apiParam {parentDetails} [parentDetail]
 * @apiParam {child[]} children
 */

/**
 * @apiDefine parentRequest
 * @apiParamExample {json} Request
 *     {
 *       "id": 1,
 *       "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *       "name": "string",
 *       "count": 1,
 *       "category": "CAT1 | CAT2",
 *       "birthday": "2015-12-31T23:59:59.123",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentDetailsId": 1,
 *       "parentDetail": {
 *         "id": 1,
 *         "address": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1
 *       }
 *     }
 */

/**
 * @apiDefine parentArrayRequest
 * @apiParamExample {json} Request
 *     [
 *       {
 *         "id": 1,
 *         "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *         "name": "string",
 *         "count": 1,
 *         "category": "CAT1 | CAT2",
 *         "birthday": "2015-12-31T23:59:59.123",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentDetailsId": 1,
 *         "parentDetail": {
 *           "id": 1,
 *           "address": "string",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1
 *         }
 *       }
 *     ]
 */

/**
 * @apiDefine parentResponse
 * @apiSuccessExample {json} Response
 *     {
 *       "id": 1,
 *       "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *       "name": "string",
 *       "count": 1,
 *       "category": "CAT1 | CAT2",
 *       "birthday": "2015-12-31T23:59:59.123",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentDetailsId": 1,
 *       "parentDetail": {
 *         "id": 1,
 *         "address": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1
 *       }
 *     }
 */

/**
 * @apiDefine parentArrayResponse
 * @apiSuccessExample {json} Response
 *     [
 *       {
 *         "id": 1,
 *         "uuid": "413e8630-c16c-11e5-b8c9-9b7d37852114",
 *         "name": "string",
 *         "count": 1,
 *         "category": "CAT1 | CAT2",
 *         "birthday": "2015-12-31T23:59:59.123",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentDetailsId": 1,
 *         "parentDetail": {
 *           "id": 1,
 *           "address": "string",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1
 *         }
 *       }
 *     ]
 */

/**
 * @apiDefine parentDetailsParam
 * @apiParam {bigint} id
 * @apiParam {string} address
 * @apiParam {date} createdAt
 * @apiParam {date} updatedAt
 * @apiParam {bigint} [parentId]
 */

/**
 * @apiDefine parentDetailsRequest
 * @apiParamExample {json} Request
 *     {
 *       "id": 1,
 *       "address": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1
 *     }
 */

/**
 * @apiDefine parentDetailsArrayRequest
 * @apiParamExample {json} Request
 *     [
 *       {
 *         "id": 1,
 *         "address": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1
 *       }
 *     ]
 */

/**
 * @apiDefine parentDetailsResponse
 * @apiSuccessExample {json} Response
 *     {
 *       "id": 1,
 *       "address": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1
 *     }
 */

/**
 * @apiDefine parentDetailsArrayResponse
 * @apiSuccessExample {json} Response
 *     [
 *       {
 *         "id": 1,
 *         "address": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1
 *       }
 *     ]
 */

