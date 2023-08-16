import {handler} from "../services/hello";

describe('Hello describe test suite', () => {
    it('should return 200', async () => {
        const result = await handler({}, {});
        
        expect(result.statusCode).toBe(200);
    })
});