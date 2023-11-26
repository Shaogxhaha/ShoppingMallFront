import httpInstance from "@/utils/http";
import { OrderResult } from "./model/payModel"

export function getOrderAPI(id: string): Result<OrderResult> {
    return httpInstance(`/member/order/${id}`);
  }
  