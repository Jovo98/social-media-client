import { login } from "./src/js/api";

global.localStorage = {
    store: {},
    getItem(key) {
        return this.store[key] || null;
    },
    setItem(key, value) {
        this.store[key] = value;
    },
    removeItem(key) {
        delete this.store[key];
    },
    clear() {
        this.store = {};
    }
};

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: 'fakeToken', userId: 1 }),
    })
);

describe('login function', () => {
    beforeEach(() => {
        localStorage.clear();
        fetch.mockClear();
    });

    test('should save the token in localStorage on successful login', async () => {
        const email = 'test@email.com';
        const password = 'password';

        await login(email, password);

        expect(localStorage.getItem('token')).toBe(JSON.stringify('fakeToken'));
    });
});