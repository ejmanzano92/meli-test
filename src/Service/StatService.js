const { getStatDB } = require('../Domain/Repository/DnaRequests');
const StatsResponse = require('../Domain/StatsResponse');

class StatService {
    async getStat() {
        const statsResponse = new StatsResponse();
        const data = await getStatDB();
        return statsResponse.mapToResponse(data.rows);
        
    }
}

module.exports = new StatService();