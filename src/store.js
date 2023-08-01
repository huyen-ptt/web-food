import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            profileData: {
                fullName: 'Phạm Thị Thanh Huyền',
                phoneNumber: '0981156216',
                state: 'Select State',
                city: 'Hưng Yên',
                street: 'Khoái Châu',
                gmail: 'phamhuyen19124@gmail.com'
            }
        };
    },

    mutations: {
        SET_PROFILE_DATA(state, newProfileData) {
            state.profileData = { ...newProfileData };
        }
    },
    getters: {
        profileData(state) {
            return state.profileData
        }
    },
});

export default store;