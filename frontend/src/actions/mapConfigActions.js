import { toggleSidePanel } from 'kepler.gl/actions';
export const initMapConfig = () => (dispatch) => {
    dispatch(toggleSidePanel('filter'));
}