import React, { FC, Component } from "react";
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
import { reducer as ThemeReducer } from "./system";
import { IProviderProps } from "./types";

const reducers = combineReducers({
    system: ThemeReducer
});

const persistConfig = {
    key: "root",
    storage: storageSession,
    blacklist: []
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
export default function Redux({ children }: IProviderProps): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>loading</div>}>
                {children}
            </PersistGate>
        </Provider>
    );
}
