import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }
  private userRole: any

  setUserRole(role: string | null) {
    this.userRole = role;
  }

  getUserRole(): string | null {
    return this.userRole;
  }
}
