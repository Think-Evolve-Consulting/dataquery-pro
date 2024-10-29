import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

export interface RequestContext {
  user: DecodedIdToken;
  // member?: MemberInstance;
}
