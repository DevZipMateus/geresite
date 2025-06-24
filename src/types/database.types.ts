
export interface Cliente {
  id: number;
  nome_empresa: string;
  nome_responsavel: string;
  email: string;
  telefone: string;
  data_criacao: string;
  expiracao: string;
  logo_url?: string;
  categoria: string;
  template_id: string;
}

export interface Database {
  public: {
    Tables: {
      clientes: {
        Row: Cliente;
        Insert: Omit<Cliente, 'id' | 'data_criacao' | 'expiracao'>;
        Update: Partial<Cliente>;
      };
    };
  };
}
