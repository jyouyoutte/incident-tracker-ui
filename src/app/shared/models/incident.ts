/**
 * Represents an incident tracked by the application.
 *
 * @remarks
 * Suggested values:
 * - `priority`: 'low' | 'medium' | 'high'
 * - `status`: 'open' | 'in_progress' | 'resolved' | 'closed'
 */
export interface Incident {
  /** Unique identifier. */
  id: number;
  /** Short title of the incident. */
  title: string;
  /** Detailed description. */
  description: string;
  /** Priority (low|medium|high). */
  priority: string;
  /** Current status (open|in_progress|resolved|closed). */
  status: string;
}