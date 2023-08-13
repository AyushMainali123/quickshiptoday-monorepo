export interface Information {
  id: string;
  title: string;
  value: React.ReactNode;
}

export interface Return {
  id: string;
  type: "UPS" | "FedEx";
  confirmationId: string;
  quantity: number;
}

