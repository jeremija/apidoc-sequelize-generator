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
