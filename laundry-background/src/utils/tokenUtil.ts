export const setToken = (token: string): void=>{
    localStorage.setItem('token', token);
}

export const getToken = (): string | null=>{
    return localStorage.getItem('token');
}

export const clearToken = (): void=>{
    localStorage.removeItem('token');
  
}

export const hasToken = (): boolean=>{
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}