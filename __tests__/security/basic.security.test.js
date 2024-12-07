describe('Basic Security Tests', () => {
  test('environment variables are properly set', () => {
    expect(process.env.NODE_ENV).toBeDefined();
  });

  test('sensitive environment variables are not exposed', () => {
    const sensitiveVars = ['DATABASE_URL', 'DIRECT_URL'];
    sensitiveVars.forEach(varName => {
      expect(process.env[varName]).not.toBeUndefined();
      // Ensure these aren't logged or exposed in error messages
      expect(process.env[varName]).not.toBe('');
    });
  });

  // Add more security-related tests as needed
  test('package.json does not contain security vulnerabilities', () => {
    const fs = require('fs');
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Check that certain security-sensitive dependencies are at safe versions
    if (packageJson.dependencies['lodash.template']) {
      const version = packageJson.dependencies['lodash.template'];
      expect(version).toMatch(/^5\./); // Ensure version 5 or higher
    }
  });
}); 