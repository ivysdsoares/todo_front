import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  Provider,
  useDispatch,
  useSelector
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { reducer as ThemeReducer } from "./System";
import { reducer as AuthReducer } from "./Auth";
import { reducer as TaskReducer } from "./Task";

const reducers = combineReducers({
  system: ThemeReducer,
  auth: AuthReducer,
  task: TaskReducer
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  blacklist: ["task"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
export default function Redux({
  children
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>loading...</div>}>
        {children}
      </PersistGate>
    </Provider>
  );
}
