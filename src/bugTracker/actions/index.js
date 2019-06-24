import { addNew } from './addNew';
import { toggle } from './toggle';
import { removeClosed } from './removeClosed';
import { toggleFilter } from './toggleFilter';
import { load } from './load';

let bugActionCreators = {
	addNew,
	toggle,
	removeClosed,
	toggleFilter,
	load
};

export default bugActionCreators;