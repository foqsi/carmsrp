export function validatePasswordComplexity(password) {
    const requirements = [];
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()]/.test(password);

    if (password.length < minLength) {
        requirements.push('at least 8 characters long');
    }
    if (!hasUpperCase) {
        requirements.push('at least one uppercase letter');
    }
    if (!hasLowerCase) {
        requirements.push('at least one lowercase letter');
    }
    if (!hasNumber) {
        requirements.push('at least one number');
    }
    if (!hasSymbol) {
        requirements.push('at least one symbol: ! @ # $ % ^ & * ( )');
    }

    return requirements;
}
