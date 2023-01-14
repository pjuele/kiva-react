import { atom } from 'recoil';

export const FiltersAtom = atom({
    key: 'FiltersAtom',
    default: {
        statusFilter: "all",
        genderFilter: "all",
        countryFilter: "BR"
    },
});
