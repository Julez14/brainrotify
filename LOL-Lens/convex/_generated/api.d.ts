/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as addMeme from "../addMeme.js";
import type * as createUser from "../createUser.js";
import type * as getCaptions from "../getCaptions.js";
import type * as getMeme from "../getMeme.js";
import type * as getNewUser from "../getNewUser.js";
import type * as getUser from "../getUser.js";
import type * as loginUser from "../loginUser.js";
import type * as schema from "../schema.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  addMeme: typeof addMeme;
  createUser: typeof createUser;
  getCaptions: typeof getCaptions;
  getMeme: typeof getMeme;
  getNewUser: typeof getNewUser;
  getUser: typeof getUser;
  loginUser: typeof loginUser;
  schema: typeof schema;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
