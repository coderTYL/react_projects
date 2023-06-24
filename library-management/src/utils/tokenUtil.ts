function setToken(token: string): void {
    localStorage.setItem('token', token);
}
function getToken(): string | null {
    return localStorage.getItem('token');
    
}
function clearToken(): void {
    localStorage.removeItem('token');
}
function hasToken(): boolean{
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}

export {setToken, getToken, clearToken, hasToken};