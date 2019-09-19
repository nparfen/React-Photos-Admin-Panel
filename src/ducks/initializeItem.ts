import uuidv1 from 'uuid/v1';

import { Item } from './types';

export const initializeItem = ():Item => ({
    id: uuidv1(),
    url: '',
    title: '',
    tooltip: {
        color: '',
        position: ''
    }
})