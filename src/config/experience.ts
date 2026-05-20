export const CAREER_START = new Date(2020, 8, 1)

export function yearsOfExperience(): number {
    return Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
}
