
let tobyVotes = [];
let scoutVotes = [];

const voteService = {
    recordVote: (petName, ipAddress) => {
        if(petName === 'toby') {
            tobyVotes.push({
                ipAddress: ipAddress
            });
        } else {
            scoutVotes.push({
                ipAddress: ipAddress
            });
        }
    },

    hasIpVoted: (ipToCheck) => {
        const hasVotedToby = tobyVotes.find( vote => ipToCheck === vote.ipAddress );
        const hasVotedScout = scoutVotes.find( vote => ipToCheck === vote.ipAddress );
        return hasVotedToby || hasVotedScout;
    }
}

module.exports = voteService;