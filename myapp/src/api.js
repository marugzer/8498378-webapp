// api.js
//CandidateId:8498378

export async function fetchMetricsData(apiUrl) {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  }
  