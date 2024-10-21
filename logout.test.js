import {logout} from "./src/js/api";

beforeEach(() => {
    global.localStorage = {
        removeItem: jest.fn(),
        clear: jest.fn(),
    };
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('logout function', () => {
    test('should remove token from localStorage', () => {
        logout();

        expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    });
});