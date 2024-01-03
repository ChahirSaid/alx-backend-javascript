export default (chinaDownload, USDownload) => Promise.race([chinaDownload, USDownload]);
