
/**
 * returns promise with api response
 */
export function getCommonWord() {
   return fetch('api/SampleData/ProcessWords').then(response => response.json());
}
