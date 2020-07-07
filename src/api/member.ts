import { MemberEntity, createDefaultMemberEntity } from '../model/member';
import { trackPromise } from 'react-promise-tracker';

const ROOT_URL: string = 'https://api.github.com';

class MemberAPI {
  // GET /orgs/:organizationName/members
  getAllMembers(organizationName: string): Promise<MemberEntity[]> {
    const gitHubMembersUrl: string = `${ROOT_URL}/orgs/${organizationName}/members`;

    return trackPromise(
      fetch(gitHubMembersUrl)
        .then((response) => this.checkStatus(response))
        .then((response) => this.parseJSON(response))
        .then((data) => this.resolveMembers(data))
    );
  }

  // GET /users/:username
  getMemberDetails(username: string): Promise<MemberEntity> {
    const gitHubMemberUrl: string = `${ROOT_URL}/users/${username}`;

    return trackPromise(
      fetch(gitHubMemberUrl)
        .then((response) => this.checkStatus(response))
        .then((response) => this.parseJSON(response))
        .then((data) => this.resolveMember(data))
    );
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  private resolveMember(data: any): Promise<MemberEntity> {
    var member: MemberEntity = createDefaultMemberEntity();
    member.id = data.id;
    member.login = data.login;
    member.avatar_url = data.avatar_url;
    // TODO Add more here to make it more interesting
    return Promise.resolve(member);
  }

  private resolveMembers(data: any): Promise<MemberEntity[]> {
    const members = data.map((gitHubMember) => {
      var member: MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });

    return Promise.resolve(members);
  }
}

export const memberAPI = new MemberAPI();
