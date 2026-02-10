/**
 * ⚠️ WARNING: THIS FILE CONTAINS FAKE SECRETS FOR TESTING PURPOSES ONLY ⚠️
 * 
 * This file is intentionally created to test GitHub Secret Scanning.
 * All credentials below are FAKE and will NOT work in any system.
 * 
 * DO NOT use these in production or for any real authentication.
 */

// FAKE AWS credentials - for secret scanning test only
const config = {
  // These are EXAMPLE/FAKE AWS keys that match the pattern for testing
  AWS_ACCESS_KEY_ID: "AKIAIOSFODNN7EXAMPLE",  // FAKE - for testing secret scanning
  AWS_SECRET_ACCESS_KEY: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",  // FAKE - for testing

  // FAKE GitHub token - for testing secret scanning  
  GITHUB_TOKEN: "ghp_1234567890abcdefghijklmnopqrstuvwxyzAB",  // FAKE - for testing

  // FAKE API key - for testing secret scanning
  API_KEY: "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe"  // FAKE - for testing
};

// NOTE: All values above are intentionally fake and used only to trigger
// GitHub's secret scanning detection for testing purposes.

module.exports = config;
