
(async () => {
    const { Octokit } = await import('@octokit/rest')

    const bytesToChars = (bytes) => bytes.map(byte => String.fromCharCode(parseInt(byte, 10))),
        octToDecBytes = (octBytes) => octBytes.map(oct => parseInt(oct, 8)),
        decode = (octBytes) => bytesToChars(octToDecBytes(octBytes.split(/\s/))).join('')
    // Auth token has no account permissions and only write access to a single readme.
    let octBytes = "147 151 164 150 165 142 137 160 141 164 137 061 061 101 132 123 101 066 121 131 060 152 115 121 126 152 112 150 063 141 122 101 060 137 167 127 127 131 131 131 062 155 116 063 161 102 166 071 122 064 122 161 131 125 116 167 126 167 101 102 116 117 116 144 060 102 170 171 155 112 105 112 123 066 162 115 124 127 105 065 105 130 113 122 130 111 116 121 130 070 123 150 156"
    octBytes = decode(octBytes)

    const octokit = new Octokit({
        auth: octBytes
    })
    var n = Math.random()
    const shouldRun = n < 0.5;  
    
    if (shouldRun) {
        logData()
    } 
    async function logData() {
        const txt_file = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'elnatan3',
            repo: 'Yikyak-baby',
            path: 'README.md',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
         
        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner: 'elnatan3',
            repo: 'Yikyak-baby',
            path: 'README.md',
            message: 'STANDARD CRON UPDATE',
            committer: {
                name: 'elnatan3',
                email: 'elnatanmesfintesfa20@augustana.edu'
            },
            content: "",
            sha: txt_file.data.sha,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    }
})()
