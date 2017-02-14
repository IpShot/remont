/**
 * Defines an action creator with a `type` and a `payloadCreator` function
 * that maps the result of its evaluation to the action's payload, if no
 * function is provided then the payload is equal to the first parameter passed
 * to the action creator.
 *
 * The `namespaceCreator` function maps the actions arguments to it's `namespace` property,
 * this is specially useful when used in conjunction with child reducers
 * will traverse the state upon dispatch depending on the values of the namespace.
 * If no namespaceCreator is provided it defaults to an empty namespace
 *
 * If the middleware parameter is present then you can transform the action
 * being dispatched, it will be passed the action and returns a new action that
 * could either be a Promise, a function or an action object.
 * Used in conjunction with the promise and/or thunk middleware there's the
 * possibility of handling complex async logic.
 *
 * ```
 * const addTodo = createAction(
 *   ADD_TODO,
 *   (text) => text,
 *   (list) => [list]
 * );
 *
 * const getTodos = createAction(
 *   GET_TODOS,
 *   api.getTodos,
 *   undefined,
 *   action => async (dispatch) => {
 *     const todos = await dispatch(action);
 *     return dispatch(markAsSeen(todos));
 *   }
 * );
 * ```
 * @param {string} type
 * @param {function(...params)} [payloadCreator]
 * @param {function(...params): Array} [namespaceCreator]
 * @param {function(next)} [middleware]
 * @returns {ActionCreator}
 */
export const createAction = (
  type,
  payloadCreator = args => args,
  namespaceCreator = () => [],
  middleware = action => action
) => (...args) => {
  const namespace = namespaceCreator(...args);
  const nargs = args.length - namespace.length;
  const payload = payloadCreator(...args.slice(namespace.length));
  const error = nargs.length === 1 && args[nargs - 1] instanceof Error;
  return middleware({
    type,
    payload,
    error,
    namespace,
  });
};
