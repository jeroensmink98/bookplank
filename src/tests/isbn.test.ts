import { describe, it, expect} from 'vitest';

const API_URL = "http://localhost:5173/api"

describe('GET /api/isbn', async () => {
    it('return 404 if ISBN is not provided', async () => {
        const req = await fetch(`${API_URL}/isbn`);
        expect(req.status).toBe(400)
    });
    it('return 404 if no book data can be found for ISBN', async() => {
        const req = await fetch(`${API_URL}/isbn?isbn=asdfsadf`);
        expect(req.status).toBe(404)
    })
})

