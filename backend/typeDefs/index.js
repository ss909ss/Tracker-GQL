import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transaction.typeDefs.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef,transactionTypeDef]);

export default mergedTypeDefs;