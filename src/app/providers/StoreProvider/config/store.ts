import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './ReducerManager';
import { $api } from 'shared/api/api';
import { productsReducer } from 'entities/Products';
import { paginationReducer } from 'entities/Pagination';
import { filtersReducer } from 'entities/Filters';
import { brandsReducer } from 'entities/Brands';

// Функция для создания Redux хранилища
export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
    ) {
    const rootReducer: ReducersMapObject<StateSchema> = {
    }
    
    const reducerManager = createReducerManager(rootReducer);
   

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware ({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    });
    //@ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];