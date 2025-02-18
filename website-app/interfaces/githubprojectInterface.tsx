export interface GitHubProject {
    id: number
    name: string
    description: string
    html_url: string
    stargazers_count: number
    language: string
    fork: boolean
    owner: {
        login: string
    }
  }