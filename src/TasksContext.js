import { createContext } from "react";

const defaultContext = {formAction: ""};

export const TaskContext = createContext(defaultContext);