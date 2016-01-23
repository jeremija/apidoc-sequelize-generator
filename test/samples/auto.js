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
 * @apiRequestExample {json} Request
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
 * @apiRequestExample {json} Request
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
 * @apiDefine childSuccess
 * @apiSuccessExample {json} Success
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
 * @apiDefine childArraySuccess
 * @apiSuccessExample {json} Success
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
 * @apiRequestExample {json} Request
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
 * @apiRequestExample {json} Request
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
 * @apiDefine grandchildSuccess
 * @apiSuccessExample {json} Success
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
 * @apiDefine grandchildArraySuccess
 * @apiSuccessExample {json} Success
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
 * @apiRequestExample {json} Request
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
 *       "children": [
 *         {
 *           "id": 1,
 *           "name": "string",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1,
 *           "grandchildren": [
 *             {
 *               "id": 1,
 *               "name": "string",
 *               "createdAt": "2015-12-31T23:59:59.123",
 *               "updatedAt": "2015-12-31T23:59:59.123",
 *               "parentId": 1,
 *               "grandParentId": 1,
 *               "childId": 1,
 *               "parent": {}
 *             }
 *           ]
 *         }
 *       ],
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
 * @apiRequestExample {json} Request
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
 *         "children": [
 *           {
 *             "id": 1,
 *             "name": "string",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1,
 *             "grandchildren": [
 *               {
 *                 "id": 1,
 *                 "name": "string",
 *                 "createdAt": "2015-12-31T23:59:59.123",
 *                 "updatedAt": "2015-12-31T23:59:59.123",
 *                 "parentId": 1,
 *                 "grandParentId": 1,
 *                 "childId": 1,
 *                 "parent": {}
 *               }
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
 *     ]
 */

/**
 * @apiDefine parentSuccess
 * @apiSuccessExample {json} Success
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
 *       "children": [
 *         {
 *           "id": 1,
 *           "name": "string",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1,
 *           "grandchildren": [
 *             {
 *               "id": 1,
 *               "name": "string",
 *               "createdAt": "2015-12-31T23:59:59.123",
 *               "updatedAt": "2015-12-31T23:59:59.123",
 *               "parentId": 1,
 *               "grandParentId": 1,
 *               "childId": 1,
 *               "parent": {}
 *             }
 *           ]
 *         }
 *       ],
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
 * @apiDefine parentArraySuccess
 * @apiSuccessExample {json} Success
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
 *         "children": [
 *           {
 *             "id": 1,
 *             "name": "string",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1,
 *             "grandchildren": [
 *               {
 *                 "id": 1,
 *                 "name": "string",
 *                 "createdAt": "2015-12-31T23:59:59.123",
 *                 "updatedAt": "2015-12-31T23:59:59.123",
 *                 "parentId": 1,
 *                 "grandParentId": 1,
 *                 "childId": 1,
 *                 "parent": {}
 *               }
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
 * @apiRequestExample {json} Request
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
 * @apiRequestExample {json} Request
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
 * @apiDefine parentDetailsSuccess
 * @apiSuccessExample {json} Success
 *     {
 *       "id": 1,
 *       "address": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1
 *     }
 */

/**
 * @apiDefine parentDetailsArraySuccess
 * @apiSuccessExample {json} Success
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

