import { lazy } from 'react';
import { Loadable } from '../../../utils/loadable';
// ***************** DESARROLLADOR => ALLAN HERRERA *********************
// ========================== INICIO ===================================
const Inicio = Loadable(lazy(() => import('../../../sections/admnomina/inicio/inicio')));

export const PARAMETROS = [
    {
        url: '/dashboard',
        element: <Inicio />
    }
]